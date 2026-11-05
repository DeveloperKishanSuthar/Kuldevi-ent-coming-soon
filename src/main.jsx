import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, CheckCircle2, Cog, Factory, Mail, MessageCircle } from "lucide-react";
import "./styles.css";

function App() {
  const stages = [
    { number: "01", title: "Planning", status: "Complete", done: true },
    { number: "02", title: "Design", status: "Complete", done: true },
    { number: "03", title: "Development", status: "In progress", active: true },
    { number: "04", title: "Launch", status: "Coming soon" },
  ];

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Kuldevi Enterprise home">
          <img src="/kuldevi-logo.png" alt="Kuldevi Enterprise And Wood Works logo" />
        </a>
        <span className="top-status"><i /> Official website coming soon</span>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> A NEW DIGITAL EXPERIENCE</div>
          <h1>Something<br /><span>great is</span> in the works.</h1>
          <p className="intro">
            We’re building a new online home for <strong>Kuldevi Enterprise And Wood Works</strong>.
            A clearer look at our work, capabilities and commitment to precision is on its way.
          </p>
          <div className="coming-label"><span className="pulse-dot" /> WEBSITE UNDER DEVELOPMENT</div>

          <div className="progress-card">
            <div className="progress-heading">
              <div>
                <span className="small-label">OUR WEBSITE JOURNEY</span>
                <h2>Making progress, step by step.</h2>
              </div>
              <span className="progress-icon"><Cog size={22} /></span>
            </div>
            <div className="progress-track" role="progressbar" aria-label="Website development progress" aria-valuetext="Development in progress">
              <div className="progress-fill"><span /></div>
            </div>
            <div className="progress-caption"><span>Development in progress</span><span className="live-caption">● LIVE UPDATE</span></div>
            <div className="stages">
              {stages.map((stage) => (
                <div className={`stage ${stage.done ? "done" : ""} ${stage.active ? "active" : ""}`} key={stage.number}>
                  <div className="stage-marker">{stage.done ? <CheckCircle2 size={16} /> : stage.number}</div>
                  <div><b>{stage.title}</b><small>{stage.status}</small></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Industrial manufacturing illustration">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="visual-glow" />
          <div className="visual-card">
            <div className="visual-card-top"><span>ENGINEERING</span><span className="visual-dot" /></div>
            <div className="machine-art">
              <div className="machine-ring ring-outer" />
              <div className="machine-ring ring-inner" />
              <div className="machine-core"><Cog size={76} strokeWidth={1.1} /></div>
              <div className="machine-axis" />
              <div className="machine-node node-one" />
              <div className="machine-node node-two" />
              <div className="machine-node node-three" />
            </div>
            <div className="visual-card-bottom">
              <div><small>BUILT ON</small><strong>Precision & Trust</strong></div>
              <span className="arrow-circle"><ArrowUpRight size={19} /></span>
            </div>
          </div>
          <div className="floating-chip chip-top"><Factory size={16} /><span>Industrial solutions</span></div>
          <div className="floating-chip chip-bottom"><span className="chip-check">✓</span><span>Quality focused</span></div>
          <div className="visual-caption">CRAFTED FOR INDUSTRY <span>✳</span></div>
        </div>
      </section>

      <section className="info-strip">
        <div className="info-intro"><span className="small-label">WHAT WE DO</span><h2>Engineered for the work that matters.</h2></div>
        <div className="info-item"><span className="info-icon"><Cog size={20} /></span><div><b>Machine Parts</b><small>Manufacturing & supply</small></div></div>
        <div className="info-item"><span className="info-icon"><Factory size={20} /></span><div><b>Industrial Support</b><small>Solutions for businesses</small></div></div>
        <div className="info-item"><span className="info-icon"><CheckCircle2 size={20} /></span><div><b>Reliable Quality</b><small>Focused on precision</small></div></div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Kuldevi Enterprise And Wood Works</span>
        <span className="footer-note">A better website is taking shape. Stay tuned.</span>
        <div className="footer-contact">
          <a href="mailto:kdentrprise@gmail.com" aria-label="Email Kuldevi Enterprise">
            <Mail size={16} /> Email us <ArrowUpRight size={14} />
          </a>
          <a href="https://wa.me/917861903232" target="_blank" rel="noopener noreferrer" aria-label="Chat with Kuldevi Enterprise on WhatsApp">
            <MessageCircle size={16} /> WhatsApp <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/917861903232"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kuldevi Enterprise on WhatsApp"
      >
        <MessageCircle size={23} />
        <span>Chat on WhatsApp</span>
      </a>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
