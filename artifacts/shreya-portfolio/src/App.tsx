import { useState, type ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight, Menu, X, BookOpen, Braces, ChartNoAxesCombined, Database, FileSpreadsheet, MapPin, Sigma } from 'lucide-react';

type NavItem = { label: string; href: string };
const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
];
const skills = ['Microsoft Excel', 'SQL', 'Power BI', 'Python'];

function BrandMark() {
  return <a href="#top" className="brand" aria-label="Shreya Mishra — back to top" data-testid="link-brand"><span className="brand-monogram">SM</span><span className="brand-name">Shreya Mishra<span className="brand-role">Data &amp; analytical thinking</span></span></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-shell"><BrandMark />
    <nav className={`primary-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
      {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} data-testid={`link-nav-${item.label.toLowerCase()}`}>{item.label}</a>)}
      <a href="#contact" className="nav-contact" onClick={() => setOpen(false)} data-testid="link-nav-contact">Contact <ArrowUpRight size={15} aria-hidden="true" /></a>
    </nav>
    <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)} data-testid="button-mobile-menu">{open ? <X size={21} /> : <Menu size={21} />}</button>
  </div></header>;
}

function SectionHeading({ eyebrow, title, index }: { eyebrow: string; title: string; index: string }) {
  return <div className="section-heading"><span className="section-index">{index}</span><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div></div>;
}

function Hero() {
  return <section className="hero-wrap" id="top" aria-labelledby="hero-title"><div className="hero-copy section-reveal">
    <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Aspiring Data Analyst <span className="eyebrow-divider">/</span> Opportunities in Surat, Gujarat</p>
    <h1 id="hero-title">Shreya Mishra</h1>
    <p className="hero-role">Aspiring Data Analyst <span aria-hidden="true">|</span> Data Analytics &amp; Business Intelligence</p>
    <h2 className="hero-headline">Curious about<br /><span>what data can</span><br />make clear.</h2>
    <p className="hero-intro">I am a final-year BCA student with a background in PCM and an interest in mathematics, data, and analytical problem-solving. I am developing my skills in Excel, SQL, Python, and Power BI, with the goal of pursuing opportunities in Data Analytics and Business Intelligence.</p>
    <div className="hero-actions"><a href="#projects" className="button button-primary" data-testid="link-explore-projects">Explore My Projects <ArrowDownRight size={17} aria-hidden="true" /></a><a href="#contact" className="button button-quiet" data-testid="link-contact-me">Contact Me <ArrowUpRight size={16} aria-hidden="true" /></a></div>
  </div>
  <aside className="hero-note" aria-label="Profile details"><div className="note-top"><span className="note-mark"><Sigma size={23} strokeWidth={1.6} /></span><span className="note-label">A student of<br />patterns &amp; possibility</span></div><div className="note-rule" /><p>From mathematical foundations to practical data tools — building a thoughtful start in analytics.</p><div className="note-footer"><span>OPPORTUNITY FOCUS</span><strong>Surat, Gujarat</strong></div></aside>
  <div className="hero-index" aria-hidden="true"><span>01</span><span className="index-line" /><span>INTRODUCTION</span></div>
  </section>;
}

function About() {
  return <section className="content-section about-section" id="about"><SectionHeading index="01" eyebrow="A little context" title="A foundation in numbers. A focus on questions." />
    <div className="about-grid"><p className="about-lead">I’m a final-year BCA student with a PCM background and an interest in analytical problem-solving.</p><div className="about-body"><p>I’m pursuing my BCA at VT Poddar BCA College and expect to graduate in 2027. I have completed ADCA and studied Physics, Chemistry, and Mathematics.</p><p>My listed technical skills are Microsoft Excel, SQL, Python, and Power BI. I’m interested in developing my analytical skills and pursuing entry-level Data Analytics and Business Intelligence opportunities.</p><div className="interest-line"><span className="interest-icon"><Sigma size={17} /></span><span>Mathematics <i>·</i> Data <i>·</i> Analytical problem-solving</span></div></div></div>
  </section>;
}

function ProjectCard({ number, type, title, summary, details, icon, className = '' }: { number: string; type: string; title: string; summary: string; details: string[]; icon: ReactNode; className?: string }) {
  return <article className={`project-card ${className}`} data-testid={`card-project-${number}`}><div className="project-topline"><span className="project-number">{number}</span><span className="project-type">{type}</span></div><div className="project-icon" aria-hidden="true">{icon}</div><h3>{title}</h3><p className="project-summary">{summary}</p><ul className="project-details">{details.map((detail) => <li key={detail}>{detail}</li>)}</ul><span className="project-footnote">{number === '01' ? 'Notebook on GitHub · link not provided' : number === '02' ? 'Power BI exploration' : 'College minor project'}</span></article>;
}

function Projects() {
  return <section className="content-section projects-section" id="projects"><SectionHeading index="02" eyebrow="Selected work" title="Learning by working through the data." /><p className="section-intro">A short overview of the project work and context provided, with each item kept within its known scope.</p>
    <div className="projects-grid"><ProjectCard number="01" type="Python · HR analytics" title="HR Analytics Notebook" summary="A Python-based HR analytics Jupyter notebook, available on GitHub." details={['Explores HR analytics using Python.', 'Dataset, methods, and findings are not described here.']} icon={<Braces size={23} strokeWidth={1.55} />} className="project-feature" /><ProjectCard number="02" type="Power BI · Exploratory analysis" title="Sales Dataset Exploration" summary="An exploratory look at a sales dataset in Power BI." details={['Technology had the highest sales.', 'Phone and Chair had almost equal high sales.', 'The dataset did not include a Profit column.']} icon={<ChartNoAxesCombined size={23} strokeWidth={1.55} />} /><div className="project-aside"><span className="aside-label">OTHER / WEB DEVELOPMENT</span><ProjectCard number="03" type="College minor project" title="Lost & Found Portal" summary="A college minor project, separate from my analytics work." details={['Built with PHP, MongoDB, React, Bootstrap, and XAMPP.', 'Includes student and admin functionality.']} icon={<Database size={22} strokeWidth={1.55} />} className="web-project" /></div></div>
  </section>;
}

function Education() {
  return <section className="content-section education-section" id="education"><SectionHeading index="03" eyebrow="Education & learning" title="A developing toolkit, grounded in study." />
    <div className="education-layout"><div className="education-list"><article className="education-entry"><div className="education-marker"><BookOpen size={18} /></div><div className="education-detail"><p className="entry-kicker">CURRENT STUDY <span>·</span> EXPECTED 2027</p><h3>Bachelor of Computer Applications</h3><p>VT Poddar BCA College</p><span className="entry-note">Final-year student</span></div></article><article className="education-entry"><div className="education-marker"><FileSpreadsheet size={18} /></div><div className="education-detail"><p className="entry-kicker">COMPLETED</p><h3>ADCA</h3></div></article><article className="education-entry"><div className="education-marker"><Sigma size={19} /></div><div className="education-detail"><p className="entry-kicker">ACADEMIC BACKGROUND</p><h3>PCM</h3><p>Physics, Chemistry, Mathematics</p></div></article></div>
    <aside className="learning-panel"><span className="learning-caption">CONTINUED LEARNING</span><div className="learning-item"><span className="learning-bullet" /><div><h3>IBM Developing Interpersonal Skills</h3><p>Course completed through Coursera.</p></div></div><div className="learning-item"><span className="learning-bullet learning-bullet-open" /><div><h3>Kaggle 5-Day AI Agents: Intensive Vibe Coding Course With Google</h3><p>Registered · scheduled June 15–19, 2026. Completion status unconfirmed.</p></div></div></aside></div>
  </section>;
}

function Skills() {
  const icons = [<FileSpreadsheet size={18} key="excel" />, <Database size={18} key="sql" />, <ChartNoAxesCombined size={18} key="powerbi" />, <Braces size={18} key="python" />];
  return <section className="content-section skills-section" id="skills"><SectionHeading index="04" eyebrow="Tools I’m developing" title="A practical starting point." /><p className="section-intro">These are the tools I’m currently learning and building familiarity with. I’m focused on steady, hands-on progress.</p><div className="skill-list">{skills.map((skill, index) => <div className="skill-item" key={skill} data-testid={`text-skill-${index}`}><span className="skill-icon">{icons[index]}</span><span>{skill}</span><span className="skill-arrow" aria-hidden="true">↗</span></div>)}</div></section>;
}

function Goals() {
  return <section className="goals-band"><div className="goals-inner"><span className="goals-label">WHAT I’M WORKING TOWARD</span><p>To grow into a thoughtful analyst — asking better questions, learning reliable tools, and communicating what the data can (and can’t) say.</p><a href="#contact" className="text-link">Let’s connect <ArrowUpRight size={16} /></a></div><div className="goals-ornament" aria-hidden="true"><span /><span /><span /><span /><span /></div></section>;
}

function Contact() {
  return <section className="content-section contact-section" id="contact"><SectionHeading index="05" eyebrow="Next steps" title="Open to learning opportunities." /><div className="contact-layout"><p>I’m seeking entry-level Data Analyst or Business Intelligence internships and opportunities, especially in Surat, Gujarat. If you’d like to discuss an opportunity, I’d be glad to hear from you.</p><div className="contact-note"><MapPin size={18} aria-hidden="true" /><span>Opportunity focus: Surat, Gujarat, India</span></div></div></section>;
}

function App() {
  return <div className="page-grain"><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main"><div className="page-shell"><Hero /><About /><Projects /><Education /><Skills /><Goals /><Contact /></div></main><footer className="site-footer"><div className="footer-shell"><BrandMark /><p>Learning, one question at a time.</p><a className="back-top" href="#top">Back to top <ArrowUpRight size={15} aria-hidden="true" /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Shreya Mishra</span><span>Opportunities · Surat, Gujarat</span></div></footer></div>;
}

export default App;
