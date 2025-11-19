/* Terminal / Typing Intro component */
function TerminalIntro() {
  const lines = [
    "Hi, I'm Abhay Kumar.",
    "Cybersecurity student, researcher, and developer.",
    "I build tools, run recon, and learn by doing."
  ];
  const [displayed, setDisplayed] = React.useState([]);
  const [lineIdx, setLineIdx] = React.useState(0);
  const [charIdx, setCharIdx] = React.useState(0);

  React.useEffect(() => {
    if (lineIdx >= lines.length) return;
    if (charIdx <= lines[lineIdx].length) {
      const t = setTimeout(() => {
        const next = displayed.slice();
        next[lineIdx] = lines[lineIdx].slice(0, charIdx);
        setDisplayed(next);
        setCharIdx(charIdx + 1);
      }, 40);
      return () => clearTimeout(t);
    }
    // line finished, pause then move to next line
    const pause = setTimeout(() => {
      setLineIdx(lineIdx + 1);
      setCharIdx(0);
    }, 600);
    return () => clearTimeout(pause);
  }, [charIdx, lineIdx]);

  return (
    <div className="terminal" aria-live="polite">
      {lines.map((_, idx) => (
        <div key={idx} className="line">{displayed[idx] || ""}{idx === Math.min(lineIdx, lines.length - 1) && <span className="caret" />}</div>
      ))}
    </div>
  );
}

function FeatureList({ items }) {
  const refs = React.useRef([]);
  React.useEffect(() => {
    // stagger reveal
    refs.current.forEach((el, idx) => {
      if (!el) return;
      el.classList.remove('show');
      setTimeout(() => el.classList.add('show'), idx * 90);
    });
  }, [items]);

  return (
    <ul className="feature-list">
      {items.map((t, i) => (
        <li key={i} ref={el => refs.current[i] = el} className="feature-item">{t}</li>
      ))}
    </ul>
  );
}

const App = () => (
  <>
    {/* Intro */}
    <section id="intro">
      <TerminalIntro />
    </section>

    {/* ABOUT */}
    <section id="about">
      <h2>About Me</h2>
      <div className="cert-underline" />
      <div className="cert-grid">
        <div className="card">
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center" }}>
            <div id="photoCarousel" style={{ width: "280px", textAlign: "center" }}>
              <div style={{ width: "260px", height: "260px", overflow: "hidden", border: "2px solid #00e6b8", borderRadius: "8px" }}>
                <img id="carouselImage" src="images/photo1.jpg" alt="Abhay" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <p>Lamrin Tech Skills University student pursuing a Bachelor of Technology in Computer Science and Engineering with a specialization in Cyber Security through the IBM Innovation Center for Education.</p>
              <p>I have a strong academic foundation and hands-on exposure to key areas of cyber security. I possess developing knowledge in SOC operations, threat hunting, OSINT, vulnerability assessment, penetration testing, and digital forensics. I am also familiar with SIEM monitoring, Red Team simulations, and working with security tools for investigations.</p>
              <p>While I am still enhancing my expertise in these domains, my curiosity, adaptability, and practical learning approach enable me to quickly grasp new concepts and apply them effectively. I am eager to further strengthen my skills through professional training and contribute meaningfully to real-world cyber security projects.</p>
              <p>Outside academics I enjoy building small tools, helping run community CTFs/hackathons, and documenting my findings on cyberswipe.in.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Resume download section */}
    <section id="resume">
      <h2>Resume</h2>
      <div className="cert-underline" />
      <div className="cert-grid">
        <div className="card">
          <p>Download my resume to review detailed project artifacts and technical assessments related to my cybersecurity expertise.</p>
          <p>Interested in collaboration or an internship? Contact me for a technical discussion, lab demo, or to explore potential security projects together.</p>
          <a href="resume.pdf" download className="download-btn">Download Resume</a>
        </div>
      </div>
    </section>

    {/* EXPERIENCE */}
    <section id="experience">
      <h2>Experience</h2>
      <div className="cert-underline" />
      <div className="cert-grid">
        <div className="card">
          <h3>Digital Forensics Intern — NCFL/IFSO Delhi Police</h3>
          <p><em>Sep 2025 — Present</em></p>
          <ul>
            <li>Performed forensic investigations & evidence preservation.</li>
            <li>Developed automated Android data extraction tool (MOB-X).</li>
            <li>Assisted SIEM monitoring & incident response tasks.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Cyber Security Trainer — TDO Tech Education</h3>
          <p><em>Aug 2025 — Sep 2025</em></p>
          <ul>
            <li>Delivered interactive cybersecurity sessions with live labs.</li>
            <li>Configured Linux/Windows virtual labs for students.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Co-Founder — Cyber Swipe</h3>
          <p><em>Aug 2024 — Present</em></p>
          <ul>
            <li>Organized cyberathons and OSINT competitions.</li>
            <li>Maintained cyberswipe.in & blog platform for awareness.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* PROJECTS */}
    <section id="projects">
      <h2>Projects</h2>

      <div className="card">
        <h3>OpenRedirect Pro Scanner 2050 — Elite Edition</h3>
        <p>Advanced Open Redirect vulnerability scanner built for bug bounty hunters, penetration testers, and security researchers. The tool focuses on discovering and validating open redirect issues at scale.</p>
        <p><strong>Features</strong></p>
        <FeatureList items={[
          "🎯 Targeted scanning for open redirect vulnerabilities",
          "🧠 Smart payload injection with hundreds of bypass techniques",
          "🔎 Historical URL discovery using Wayback, Google Cache, and crawling",
          "🔐 Proxy support with automatic validation",
          "💻 Multi-threaded async engine using httpx and asyncio",
          "📊 Reports in JSON, terminal, and HTML formats",
          "📝 Logging & resume support for large-scope campaigns",
          "🔌 Modular architecture for easy extension (Playwright, Web GUI, etc.)"
        ]} />
        <a href="https://github.com/abhayarya91/openRedirect.git" target="_blank">🔗 GitHub Repository</a>
      </div>

      <div className="card">
        <h3>Domain WHOIS Analysis — cyberswipe.in</h3>
        <p>This repository contains detailed reports and scripts for analyzing domain information using WHOIS and related tools. It serves as a comprehensive guide for understanding the structure, security, and configuration of the domain <em>cyberswipe.in</em>.</p>
        <p><strong>Features</strong></p>
        <FeatureList items={[
          "WHOIS data analysis for the domain cyberswipe.in",
          "Detailed network and hosting information",
          "SSL/TLS configuration and encryption details",
          "DNS security recommendations (SPF, DMARC, DNSSEC)",
          "Summary of server- and client-side technologies used",
          "Actionable security and optimization recommendations"
        ]} />
        <a href="https://github.com/abhayarya91/mini_projects_IN_PYTHON.git" target="_blank">🔗 GitHub Repository</a>
      </div>

      <div className="card">
        <h3>Smart KeyPad Locker</h3>
        <p>IoT Smart Lock with keypad and ThingSpeak integration. Demonstrates a practical smart-lock system using an ESP8266, servo motor, keypad, and remote monitoring via ThingSpeak.</p>
        <p><strong>Features</strong></p>
        <FeatureList items={[
          "Keypad unlocking with predefined or master passcode",
          "Master key enforced after 3 incorrect attempts",
          "ThingSpeak integration for lock/unlock events and incorrect attempts",
          "Servo-controlled physical lock mechanism",
          "WiFi connectivity using ESP8266 (NodeMCU)"
        ]} />
        <p><strong>Components</strong>: ESP8266 NodeMCU, Servo motor, 4x4 keypad, ThingSpeak channel.</p>
        <a href="https://github.com/abhayarya91/Smart_keyPad_locker.git" target="_blank">🔗 GitHub Repository</a>
      </div>

      <div className="card">
        <h3>Coding Raja — Internship Project (To-Do CLI)</h3>
        <p>Command-line to-do list application written in Python to manage tasks with priorities and due dates. Built during an internship to learn practical software development and file persistence.</p>
        <p><strong>Features</strong></p>
        <FeatureList items={[
          "Task management: add, remove, and mark tasks as complete",
          "Task priority system (high / medium / low)",
          "Due dates and list view with details",
          "Data persistence using simple file handling (or optional lightweight DB)"
        ]} />
        <a href="https://github.com/abhayarya91/Coding-Raja-Technologies-Internship.git" target="_blank">🔗 GitHub Repository</a>
      </div>

      {/* Keep MOB-X as-is if present */}
      <div className="card">
        <h3>MOB-X</h3>
        <p>Automated Android forensic tool for extracting SMS, call logs, contacts & filesystem data while preserving integrity.</p>
      </div>
    </section>

    {/* CERTIFICATIONS */}
    <section id="certifications" className="cert-section">
      <h2>Certifications</h2>
      <div className="cert-underline" />
      <div className="cert-grid">
        <div className="card cert-card">
          <div className="cert-icon">
            <svg viewBox="0 0 24 24" className="cert-svg">
              <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.38-2.88 8.44-7 9.76-4.12-1.32-7-5.38-7-9.76V6.3l7-3.12z"/>
              <path fill="currentColor" d="M11 7h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
          <h3>Career Essentials in Cyber Security — Microsoft & LinkedIn</h3>
          <p>Foundational career skills for cybersecurity roles: role mapping, resume & interview preparation, and practical pathways into the field. Focuses on translating technical experience into job-ready outcomes.</p>
        </div>

        <div className="card cert-card">
          <div className="cert-icon">
            <svg viewBox="0 0 24 24" className="cert-svg">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
          <h3>Intro to Dark Web Anonymity & Cryptocurrency — EC-Council</h3>
          <p>Overview of dark web access and anonymity tools (Tor, VPNs) plus cryptocurrency basics commonly used in underground markets. Emphasizes investigative indicators and safe research practices.</p>
        </div>

        <div className="card cert-card">
          <div className="cert-icon">
            <svg viewBox="0 0 24 24" className="cert-svg">
              <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
            </svg>
          </div>
          <h3>Complete Ethical Hacking Course 2025 — Udemy</h3>
          <p>Comprehensive hands-on ethical hacking training covering reconnaissance, scanning, exploitation, and reporting using modern tools and labs. Designed around real-world scenarios and practical lab exercises.</p>
        </div>

        <div className="card cert-card">
          <div className="cert-icon">
            <svg viewBox="0 0 24 24" className="cert-svg">
              <path fill="currentColor" d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
            </svg>
          </div>
          <h3>Computer Forensics & Digital Forensics Masterclass</h3>
          <p>In-depth forensic techniques for acquiring, analysing, and preserving digital evidence across devices. Covers filesystem analysis, timeline construction, and reporting best practices for investigations.</p>
        </div>
      </div>
    </section>

    {/* SKILLS */}
    <section id="skills">
      <h2>Skills & Tools</h2>
      <div className="cert-underline" />
      <div className="cert-grid">
        <div className="card">
          <h3>Technical Skills</h3>
          <p>Digital Forensics | Threat Hunting | OSINT | SOC Monitoring | Python | Linux | Networking | FTK | Oxygen | Xray | Red Teaming | SIEM</p>
        </div>
      </div>
    </section>

    {/* ACHIEVEMENTS & EXTRA-CURRICULAR ACTIVITIES */}
    <section id="achievements">
      <h2>Achievements & Activities</h2>
      <div className="cert-underline" />
      <div className="cert-grid">
        <div className="card achievement-card">
          <h3>Association of University (AIU), Wushu - Participant</h3>
          <p><em>Feb 2024</em></p>
          <p>Participated in the prestigious AIU Wushu tournament, demonstrating discipline and physical prowess while representing the university.</p>
        </div>

        <div className="card achievement-card">
          <h3>IBM ICE National Hackathon - GLA University, Mathura</h3>
          <p><em>Mar 2024</em></p>
          <p>Participated in the national-level hackathon organized by IBM Innovation Center for Education, focusing on innovative technological solutions.</p>
        </div>

        <div className="card achievement-card">
          <h3>Education Excellence Award</h3>
          <p><em>Aug 2024</em></p>
          <p>Recognized for outstanding academic performance and contributions to the cybersecurity learning community.</p>
        </div>

        <div className="card achievement-card">
          <h3>Mini Cyberthon "Hack The Future" - Lead Organizer</h3>
          <p><em>Sep 2024</em></p>
          <ul>
            <li>Organized a focused Cyber Security hackathon emphasizing Red Teaming and OSINT techniques</li>
            <li>Developed and maintained the event website and blog platform: cyberswipe.in | blog.cyberswipe.in</li>
            <li>Implemented robust security measures for the event infrastructure</li>
          </ul>
        </div>

        <div className="card achievement-card">
          <h3>Mini Hackathon "Hack The Future 2.0" - Lead Organizer</h3>
          <p><em>Sep 2025</em></p>
          <p>Successfully organized a 12-hour cybersecurity innovation marathon at Lamrin Tech Skills University. The event fostered collaboration among participants and provided hands-on experience in practical cybersecurity challenges.</p>
        </div>
      </div>
    </section>
{/* EDUCATION */}
<section id="education">
  <h2>Education</h2>
  <div className="cert-underline" />
  <div className="education-timeline">

    <div className="education-item">
      <div className="education-content">
        <h3>Intermediate (12th)</h3>
        <h4>Swami Vivekanand I.C Khadda Kushinagar, Uttar Pradesh</h4>
        <p className="duration">Apr 2019 – Mar 2021</p>
        <p>------------------------------------------------------------</p>
      </div>
      <div className="arrow-connector">
        <div className="arrow-line"></div>
        <div className="arrow-head"></div>
      </div>
    </div>

    <div className="education-item current">
      <div className="education-content">
        <h3>Bachelor of Technology (B.Tech)</h3>
        <h4>Lamrin Tech Skills University, Punjab</h4>
        <p className="specialization">Computer Science & Engineering (Cyber Security)</p>
        <p className="duration">Aug 2023 – Present</p>
      </div>
    </div>

  </div>
</section>


    {/* CONTACT */}
    <section id="contact">
      <h2>Get In Touch</h2>
      <div className="cert-underline" />
      <div className="contact-grid">
        <div>
          <div className="info-card">
            <div className="info-icon">📍</div>
            <div>
              <h4>Location</h4>
              <p>Kushinagar, Uttar Pradesh, India</p>
            </div>
          </div>

          <div style={{ height: '14px' }} />

          <div className="info-card">
            <div className="info-icon">📞</div>
            <div>
              <h4>Phone</h4>
              <p>+91 9125973074</p>
            </div>
          </div>

          <div style={{ height: '14px' }} />

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <div>
              <h4>Email</h4>
              <p><a href="mailto:abhay.ambalika@gmail.com">abhay.ambalika@gmail.com</a></p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div>
            <div className="section-title">Connect With Me</div>
            <div className="social-list">
              <a className="social-btn" href="https://www.linkedin.com/in/abhay-kumar-aa2100299" target="_blank">
                <div className="icon">in</div>
                <div>LinkedIn</div>
              </a>
              <a className="social-btn" href="https://github.com/abhayarya91" target="_blank">
                <div className="icon">gh</div>
                <div>GitHub</div>
              </a>
              <a className="social-btn" href="https://tryhackme.com/p/cyberspace91" target="_blank">
                <div className="icon">TH</div>
                <div>TryHackMe</div>
              </a>
              <a className="social-btn" href="https://www.instagram.com/_mr_abhay.arya91_?utm_source=qr&igsh=eGc2d3FjcGQ2NzNk" target="_blank">
                <div className="icon">ig</div>
                <div>Instagram</div>
              </a>
            </div>
          </div>

          <div style={{ marginTop: '8px' }} />

          <div>
            <a className="download-btn" href="resume.pdf" download style={{ display: 'inline-block' }}>Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));

/* Scroll animation */
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) sec.classList.add("visible");
  });
});

/* Carousel */
(function () {
  const imgs = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg", "images/photo4.jpg", "images/photo5.jpg"];
  let i = 0;
  const imgEl = document.getElementById("carouselImage");
  let timer;
  const show = n => { i = (n + imgs.length) % imgs.length; imgEl.src = imgs[i]; };
  const auto = () => { clearInterval(timer); timer = setInterval(() => show(i + 1), 3000); };
  document.addEventListener("DOMContentLoaded", () => {
    imgEl.src = imgs[0];
    auto();
    // Prev/Next buttons removed; keep image click to advance and keep auto-advance
    imgEl.addEventListener("click", () => { show(i + 1); auto(); });
  });
})();
