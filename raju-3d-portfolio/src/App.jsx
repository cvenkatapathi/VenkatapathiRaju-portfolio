import React from "react";

import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
  Terminal,
  UserRound
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Scene from "./components/Scene";
import Nav from "./components/Nav";
import SectionTitle from "./components/SectionTitle";
import { profile, skills, experience, education, certifications, projects, services } from "./data/portfolio";

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out"
      });

      gsap.from(".hero-badge", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "back.out(1.7)"
      });

      const reveal = gsap.utils.toArray(".reveal");
      reveal.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 84%"
            }
          }
        );
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div ref={appRef} className="app">
      <div className="cursor-glow" />
      <Nav />

      <main>
        <section id="home" className="hero section-shell">
          <Scene />
          <div className="hero-grid" />

          <div className="hero-copy">
            <div className="hero-badge">
              <span className="pulse-dot" />
              Available for software developer opportunities
            </div>

            <span className="eyebrow">// {profile.tagline}</span>
            <h1>
              Hello, I’m
              <strong>
                Venkata Pathi <span>Raju</span>
              </strong>
            </h1>

            <h2>{profile.role}</h2>
            <p>
              Building practical digital experiences with Java, Spring Boot,
              JavaScript, Node.js and modern web technologies.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => scrollTo("projects")}>
                View My Work <ArrowDown size={17} />
              </button>
              <button className="ghost-btn" onClick={() => scrollTo("contact")}>
                Contact Me <ArrowUpRight size={17} />
              </button>
            </div>

            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={19} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={19} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={19} />
              </a>
            </div>
          </div>

          <div className="hero-note">
            <span>01</span>
            <div>Ideas<br />into<br />reality.</div>
          </div>
        </section>

        <section id="about" className="section-shell section">
          <SectionTitle
            eyebrow="Get to know me"
            title="About Me"
            text="A developer who enjoys turning real requirements into working products."
          />

          <div className="about-grid reveal">
            <div className="portrait-card">
              <div className="portrait-frame">
                <img src="/profile.jpg" alt="Venkata Pathi Raju" />
                <div className="portrait-label">FULL STACK / 2026</div>
              </div>
              <div className="scan-line" />
            </div>

            <div className="about-copy glass">
              <span className="mini-label">01 — PROFILE</span>
              <h3>Code with purpose.<br /><span>Build with curiosity.</span></h3>
              <p>
                {profile.summary} I enjoy working across the stack — from
                responsive interfaces and REST APIs to authentication,
                databases and real-world deployment.
              </p>
              <p>
                My current direction is software development, with a strong
                focus on Java Full Stack development while continuing to grow
                across modern frontend and backend technologies.
              </p>

              <div className="trait-grid">
                <div><Code2 size={18} /><b>Problem Solver</b><span>Practical approach</span></div>
                <div><Layers3 size={18} /><b>Full Stack</b><span>End-to-end thinking</span></div>
                <div><Database size={18} /><b>Data Driven</b><span>SQL + NoSQL</span></div>
                <div><Terminal size={18} /><b>Always Learning</b><span>Keep improving</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell section">
          <SectionTitle
            eyebrow="Technologies I work with"
            title="My Skills"
            text="A practical stack built through internships and real projects."
          />

          <div className="skill-grid reveal">
            {skills.map((skill, index) => (
              <div className="skill-card glass" key={skill.name} style={{ "--i": index }}>
                <div className="skill-icon">{skill.name.slice(0, 2).toUpperCase()}</div>
                <div>
                  <b>{skill.name}</b>
                  <span>{skill.group} · {skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell section">
          <SectionTitle
            eyebrow="My journey"
            title="Experience"
            text="Internships and client work that shaped my practical development skills."
          />

          <div className="timeline reveal">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker">
                  <BriefcaseBusiness size={17} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-card glass">
                  <div className="timeline-head">
                    <div>
                      <span className="mini-label">{item.period}</span>
                      <h3>{item.role}</h3>
                      <h4>{item.company}</h4>
                    </div>
                    <span className="timeline-index">0{index + 1}</span>
                  </div>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-shell section education-section">
          <SectionTitle
            eyebrow="My academic background"
            title="Education"
          />
          <div className="education-card glass reveal">
            <div className="degree-icon"><GraduationCap size={34} /></div>
            <div>
              <span className="mini-label">{education.period}</span>
              <h3>{education.degree}</h3>
              <p>{education.college}</p>
            </div>
            <div className="education-orbit">
              <div className="orbit-ring ring-one" />
              <div className="orbit-ring ring-two" />
              <GraduationCap size={52} />
            </div>
          </div>

          <div className="cert-row reveal">
            {certifications.map((cert) => (
              <div className="cert glass" key={cert}>
                <Sparkles size={16} />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell section">
          <SectionTitle
            eyebrow="Things I’ve built"
            title="Featured Projects"
            text="Selected work that demonstrates frontend, backend, database and product thinking."
          />

          <div className="project-grid reveal">
            {projects.map((project) => (
              <article className="project-card glass" key={project.title}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                  <ArrowUpRight size={19} />
                </div>

                <div className="project-visual">
                  <div className="visual-grid" />
                  <div className="visual-orb" />
                  <span>{project.title === "AI Interviewer" ? "AI" : "</>"}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tag-row">
                  {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>

                <div className="project-links">
                  {project.live && (
                    <a className="primary-btn small" href={project.live} target="_blank" rel="noreferrer">
                      Live Demo <ExternalLink size={15} />
                    </a>
                  )}
                  <a className="ghost-btn small" href={project.github} target="_blank" rel="noreferrer">
                    GitHub <Github size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section">
          <SectionTitle
            eyebrow="Turning ideas into real products"
            title="What I Do"
          />
          <div className="service-grid reveal">
            {services.map((service, index) => {
              const icons = [<Code2 />, <Layers3 />, <Terminal />, <Sparkles />];
              return (
                <div className="service-card glass" key={service.title}>
                  <div className="service-icon">{icons[index]}</div>
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="github-strip section-shell reveal">
          <div>
            <span className="eyebrow">// Open source / code</span>
            <h2>See what I’m building on GitHub.</h2>
            <p>Projects, experiments and code that show how I learn by building.</p>
          </div>
          <a className="primary-btn" href={profile.github} target="_blank" rel="noreferrer">
            View GitHub <Github size={17} />
          </a>
        </section>

        <section id="contact" className="section-shell section contact-section">
          <SectionTitle
            eyebrow="Let’s build something together"
            title="Get In Touch"
            text="Have a project in mind, an opportunity, or simply want to connect?"
          />

          <div className="contact-grid reveal">
            <div className="contact-info">
              <a href={`mailto:${profile.email}`} className="contact-item glass">
                <span className="contact-icon"><Mail size={19} /></span>
                <span><small>Email</small><b>{profile.email}</b></span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-item glass">
                <span className="contact-icon"><Linkedin size={19} /></span>
                <span><small>LinkedIn</small><b>Connect with me</b></span>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-item glass">
                <span className="contact-icon"><Github size={19} /></span>
                <span><small>GitHub</small><b>@cvenkatapathi</b></span>
              </a>
              <div className="contact-item glass">
                <span className="contact-icon"><MapPin size={19} /></span>
                <span><small>Location</small><b>{profile.location}</b></span>
              </div>
            </div>

            <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <label>Your Name<input placeholder="Enter your name" /></label>
                <label>Your Email<input type="email" placeholder="you@example.com" /></label>
              </div>
              <label>Subject<input placeholder="What would you like to discuss?" /></label>
              <label>Your Message<textarea rows="5" placeholder="Write your message..." /></label>
              <button className="primary-btn" type="submit">
                Send Message <Send size={16} />
              </button>
              <small className="form-note">
                This demo form is UI-only. Connect it to Formspree, EmailJS or your backend before deployment.
              </small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section-shell">
        <div className="footer-brand">VPR</div>
        <p>{profile.tagline}</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
          <a href={`mailto:${profile.email}`}><Mail size={17} /></a>
        </div>
        <button className="top-btn" onClick={() => scrollTo("home")}>
          Back to Top <ArrowUp size={15} />
        </button>
        <span className="copyright">© 2026 Venkata Pathi Raju. Built with React + Three.js.</span>
      </footer>
    </div>
  );
}

export default App;