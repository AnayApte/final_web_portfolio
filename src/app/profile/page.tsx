const topTech = [
  { label: 'Python', color: '#2D46B9' },
  { label: 'React', color: '#E91429' },
  { label: 'TypeScript', color: '#8D67AB' },
  { label: 'Next.js', color: '#148A08' },
  { label: 'Flutter', color: '#DC148C' },
]

export default function ProfilePage() {
  return (
    <div>
      {/* Profile hero */}
      <div
        className="px-8 pt-16 pb-8 flex items-end gap-6"
        style={{
          background: 'linear-gradient(to bottom, #1a237e 0%, #121212 100%)',
          minHeight: '260px',
        }}
      >
        {/* Avatar placeholder */}
        <div className="w-36 h-36 rounded-full flex-shrink-0 bg-[#535353] flex items-center justify-center shadow-2xl border-4 border-[#282828]">
          <svg viewBox="0 0 24 24" fill="#A7A7A7" className="w-20 h-20">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>

        <div>
          <p className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Profile</p>
          <h1 className="text-white font-black text-6xl mb-2">Anay Apte</h1>
          <p className="text-[#A7A7A7] text-sm">
            CS student at the University of Pennsylvania · Open to SWE, ML &amp; Quant internships
          </p>
        </div>
      </div>

      <div className="px-8 py-6 pb-12 space-y-10">
        {/* Contact */}
        <section>
          <h2 className="text-white font-bold text-xl mb-4">Contact</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:anayaptecollege@gmail.com"
              className="flex items-center gap-2 bg-[#282828] hover:bg-[#3E3E3E] text-white text-sm px-4 py-2 rounded-full transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              anayaptecollege@gmail.com
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#282828] hover:bg-[#3E3E3E] text-white text-sm px-4 py-2 rounded-full transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#282828] hover:bg-[#3E3E3E] text-white text-sm px-4 py-2 rounded-full transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </section>

        {/* About */}
        <section>
          <h2 className="text-white font-bold text-xl mb-4">About</h2>
          <p className="text-[#A7A7A7] text-sm leading-relaxed max-w-2xl">
            I&apos;m a CS student at the University of Pennsylvania with experience in software engineering,
            data analysis, and machine learning. I&apos;ve shipped production software for enterprise clients,
            analyzed large-scale research datasets at Argonne National Laboratory, and built mobile apps
            from scratch. I&apos;m drawn to problems at the intersection of systems, data, and real-world impact.
          </p>
        </section>

        {/* Top Technologies */}
        <section>
          <h2 className="text-white font-bold text-xl mb-1">Top Technologies</h2>
          <p className="text-[#A7A7A7] text-xs mb-5">Most used across projects and internships</p>
          <div className="flex flex-wrap gap-6">
            {topTech.map((tech) => (
              <div key={tech.label} className="flex flex-col items-center gap-2">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: tech.color }}
                >
                  <span className="text-white font-bold text-xs text-center px-1 leading-tight">
                    {tech.label}
                  </span>
                </div>
                <span className="text-white text-xs font-medium">{tech.label}</span>
                <span className="text-[#A7A7A7] text-xs">Technology</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
