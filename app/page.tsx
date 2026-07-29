import { ScrollReveal } from "./ScrollReveal";
import { ProjectVideo } from "./ProjectVideo";

const projects = [
  {
    number: "01",
    title: "Vedant Capital",
    type: "Website",
    className: "project--aster",
    art: (
      <img
        src="/work/vedant-capital.jpg"
        alt="Vedant Capital website displayed on a laptop"
      />
    ),
  },
  {
    number: "02",
    title: "Octa Digital",
    type: "Branding",
    className: "project--field",
    art: (
      <img
        src="/work/octa-digital.jpg"
        alt="Octa Digital logo applied to a fan of printed cards"
      />
    ),
  },
  {
    number: "03",
    title: "What’s The Buzz? Magazine",
    type: "Publication",
    className: "project--luma",
    art: (
      <img
        src="/work/whats-the-buzz.jpg"
        alt="A collection of What’s The Buzz? magazine spreads"
      />
    ),
  },
  {
    number: "04",
    title: "Chris Dodson Thatching Services",
    type: "Website",
    className: "project--common",
    art: (
      <img
        src="/work/chris-dodson.jpg"
        alt="Chris Dodson Thatching Services website shown on a tablet"
      />
    ),
  },
  {
    number: "05",
    title: "musicMagpie",
    type: "Animation",
    className: "project--morrow",
    art: <ProjectVideo />,
  },
  {
    number: "06",
    title: "Unified Business IT",
    type: "Branding",
    className: "project--signal",
    art: (
      <img
        src="/work/unified-business-it.jpg"
        alt="Unified Business IT identity applied to a white T-shirt"
      />
    ),
  },
  {
    number: "07",
    title: "Boxere",
    type: "Social Media Designs",
    className: "project--boxere",
    art: (
      <img
        src="/work/boxere-social-media.jpg"
        alt="Boxere social media campaign displayed on two mobile phones"
      />
    ),
  },
  {
    number: "08",
    title: "Catci",
    type: "Packaging Design",
    className: "project--catci",
    art: (
      <img
        src="/work/catci-packaging.jpg"
        alt="Catci orange and grapefruit exfoliator packaging"
      />
    ),
  },
];

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="AC, back to top">
          AC<span>®</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#profile">Profile</a>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
      <section className="hero" id="top" aria-labelledby="hero-title" data-sticky-panel>
        <h1 id="hero-title">
          Designing useful
          <br />
          things with <em>character.</em>
        </h1>
        <div className="hero-foot">
          <p>
            I turn complex briefs into clear, characterful work — from the
            first conversation to the final detail.
          </p>
          <a href="#work" className="round-link" aria-label="Scroll to selected work">
            ↓
          </a>
        </div>
      </section>

      <section className="about section-shell" id="about" aria-labelledby="about-title" data-reveal data-sticky-panel>
        <div className="section-label">
          <span>(01)</span>
          <span>About</span>
        </div>
        <div className="about-copy">
          <h2 id="about-title">
            I’m Abigail, a UX and graphic designer who makes complex things
            feel <em>clear</em>, useful and human.
          </h2>
          <div className="about-detail">
            <p>
              I’ve spent the last decade moving between web, brand, print,
              packaging, motion and UX — usually happiest where disciplines
              overlap.
            </p>
            <p>
              Today I lead creative services at gotimo, setting direction,
              organising projects and translating client ideas into work people
              can actually use.
            </p>
          </div>
        </div>
      </section>

      <section className="skills section-shell" aria-labelledby="skills-title" data-reveal data-sticky-panel>
        <div className="section-label">
          <span>(02)</span>
          <h2 id="skills-title">Capabilities</h2>
        </div>
        <div className="skills-list">
          {[
            ["UX & digital", "User journeys, wireframes, web design, prototyping"],
            ["Brand & print", "Identity, typography, packaging, publications"],
            ["Campaigns & motion", "Email, social, animation, art direction"],
            ["Creative leadership", "Direction, planning, delegation, client communication"],
          ].map(([title, detail], index) => (
            <div className="skill-row" key={title}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
              <span className="skill-arrow" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="approach section-shell" aria-labelledby="approach-title" data-sticky-panel>
        <div className="section-label section-label--light">
          <span>(03)</span>
          <span>How I work</span>
        </div>
        <div className="approach-copy">
          <div className="approach-intro">
            <h2 id="approach-title">
              Good work starts with <em>listening</em> — then making the route
              forward feel obvious.
            </h2>
          </div>
          <div className="approach-grid">
            {[
              [
                "Listen before drawing",
                "I get close to the brief, the people and the real problem before choosing a visual answer.",
              ],
              [
                "Make complexity clearer",
                "UX thinking helps me organise information and turn busy requirements into intuitive experiences.",
              ],
              [
                "Own the whole journey",
                "I’m comfortable moving from an early idea through design, feedback, production and final delivery.",
              ],
              [
                "Bring people with me",
                "I work closely with clients, stakeholders and developers, keeping decisions clear and momentum steady.",
              ],
            ].map(([title, detail], index) => (
              <article
                className="approach-card"
                key={title}
                aria-labelledby={`approach-${index + 1}`}
              >
                <span>0{index + 1}</span>
                <h3 id={`approach-${index + 1}`}>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work section-shell" id="work" aria-labelledby="work-title" data-sticky-panel>
        <div className="work-heading" data-reveal>
          <div className="section-label section-label--light">
            <span>(04)</span>
            <span>Selected work</span>
          </div>
          <h2 id="work-title">A few things<br />I’ve helped make.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project ${project.className}`}
              key={project.title}
              data-reveal="roll"
              aria-labelledby={`project-${project.number}`}
            >
              <div className="project-visual">{project.art}</div>
              <div className="project-meta">
                <span>{project.number}</span>
                <h3 id={`project-${project.number}`}>{project.title}</h3>
                <p>{project.type}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile" id="profile" aria-labelledby="profile-title" data-sticky-panel>
        <div className="profile-heading" data-reveal>
          <div className="section-label section-label--light">
            <span>(05)</span>
            <span>Profile</span>
          </div>
          <h2 id="profile-title">The foundations<br />behind the work.</h2>
        </div>

        <div className="profile-grid">
          <article
            className="profile-card profile-card--experience"
            data-reveal
            aria-labelledby="experience-card-title"
          >
            <span className="profile-number">01</span>
            <p className="profile-eyebrow" id="experience-card-title">Experience</p>
            <p className="experience-figure">10</p>
            <h3>Years of experience</h3>
            <p className="profile-summary">
              A decade progressing from hands-on design and production to UX,
              client partnership and creative leadership.
            </p>
          </article>

          <article
            className="profile-card"
            data-reveal
            aria-labelledby="education-card-title"
          >
            <span className="profile-number">02</span>
            <p className="profile-eyebrow" id="education-card-title">
              Education &amp; certifications
            </p>
            <div className="credential-list">
              <div>
                <span>2023</span>
                <p>Google UX Design Professional Certificate</p>
              </div>
              <div>
                <span>2013–2016</span>
                <p>BA (Hons) Graphic Design — Norwich University of the Arts</p>
              </div>
              <div>
                <span>2010–2013</span>
                <p>
                  BTEC Graphic Design &amp; BTEC Art &amp; Design — Cambridge
                  Regional College
                </p>
              </div>
            </div>
          </article>

          <article
            className="profile-card"
            data-reveal
            aria-labelledby="skills-card-title"
          >
            <span className="profile-number">03</span>
            <p className="profile-eyebrow" id="skills-card-title">Skills</p>
            <div className="skill-groups">
              <div>
                <h3>Disciplines</h3>
                <p>
                  UI/UX Design, Web Design, Email Design, Packaging Design,
                  Illustration, and Typography.
                </p>
              </div>
              <div>
                <h3>Industry software</h3>
                <p>
                  Figma, Adobe XD, Photoshop, Illustrator, InDesign, After
                  Effects, and Blender.
                </p>
              </div>
              <div>
                <h3>Web &amp; development</h3>
                <p>WordPress and HTML/CSS.</p>
              </div>
            </div>
          </article>
        </div>

        <section className="career-path" aria-labelledby="career-title">
          <div className="career-heading" data-reveal>
            <p>Career path</p>
            <h3 id="career-title">From craft to creative direction.</h3>
          </div>
          <div className="career-list">
            {[
              [
                "2024—Now",
                "Head of Creative Services",
                "gotimo",
                "Creative direction / project leadership / client communication",
              ],
              [
                "2022—2024",
                "UX Designer",
                "Uniphar Commercial & The Studio",
                "UX / digital perspective / web projects",
              ],
              [
                "2020—2022",
                "Graphic Designer",
                "musicMagpie",
                "Campaigns / animation / email / packaging",
              ],
              [
                "2018—2020",
                "Web Designer",
                "Geek Design",
                "Web design / WordPress / identity",
              ],
              [
                "2017—2018",
                "Graphic Designer / Artworker",
                "Miswa Chemicals",
                "Packaging / labels / production artwork",
              ],
              [
                "2017",
                "Graphic Designer",
                "OnMobile",
                "Illustration / icons / mobile themes",
              ],
            ].map(([date, role, company, focus]) => (
              <article
                className="career-row"
                key={`${company}-${role}`}
                data-reveal
                aria-label={`${role}, ${company}, ${date}`}
              >
                <span>{date}</span>
                <div>
                  <h4>{role}</h4>
                  <p>{company}</p>
                </div>
                <p>{focus}</p>
              </article>
            ))}
          </div>
        </section>

        <footer>
          <span>© 2026 Abigail</span>
          <span>Designer / Creative thinker</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </section>
      </main>
    </>
  );
}
