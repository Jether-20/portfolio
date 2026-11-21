import Image from "next/image";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="hero shell">
      <div className="hero-visual">
        <svg className="hero-word" viewBox="0 0 1200 380" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="developer-fade" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="330">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.85" />
              <stop offset="75%" stopColor="var(--accent-dark)" stopOpacity="0.55" />
              <stop offset="90%" stopColor="var(--accent-dark)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <text x="0" y="330" textLength="1120" lengthAdjust="spacingAndGlyphs" fill="url(#developer-fade)">DEVELOPER</text>
        </svg>
        <div className="hero-portrait">
          <Image src="/images/jether-portrait-cutout.webp" alt="Portrait of Jether Bagor" width={1254} height={1254} sizes="(max-width: 767px) 100vw, 60vw" preload />
        </div>
      </div>
      <div className="hero-copy">
        <p className="hero-greeting">Hello, I’m</p>
        <h1 id="hero-heading">Jether<br />Bagor</h1>
        <p className="hero-role">Software Developer</p>
        <span className="accent-rule" aria-hidden="true" />
        <p className="hero-description">I build web and Android apps with a QA eye for quality. I care about how things work and how they break.</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">View my work</a>
          <a href="#contact" className="button button-outline">Contact me</a>
        </div>
      </div>
      <dl className="hero-stats">
        <div><dt>User roles tested</dt><dd>3</dd></div>
        <div><dt>Platforms (Web + Android)</dt><dd>2</dd></div>
        <div><dt>Test areas covered</dt><dd>11</dd></div>
      </dl>
      <a href="#projects" className="hero-bottom eyebrow">Selected projects</a>
    </section>
  );
}
