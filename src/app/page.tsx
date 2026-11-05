import { IntroSplash } from "@/components/intro-splash";
import { Icon } from "@/components/icon";
import { WaterlooSigil } from "@/components/waterloo-sigil";
import { assetPath } from "@/lib/asset-path";
import styles from "./page.module.css";

const experience: {
  company: string;
  location: string;
  logo: string;
  summary: string;
  start: string;
  end: string;
}[] = [
  {
    company: "Rippling",
    location: "San Francisco, CA",
    logo: "/images/companies/rippling.svg",
    summary: "Payroll infrastructure and distributed workflow engines.",
    start: "2027-01",
    end: "2027-04",
  },
  {
    company: "Faire",
    location: "Toronto, ON",
    logo: "/images/companies/faire.png",
    summary: "Event streaming, real-time telemetry, and compute infrastructure.",
    start: "2026-05",
    end: "2026-08",
  },
  {
    company: "AlphaSense",
    location: "New York, NY",
    logo: "/images/companies/alphasense.png",
    summary: "SQL compilers, data pipelines, and internal developer tools.",
    start: "2025-09",
    end: "2026-04",
  },
  {
    company: "Government of Canada",
    location: "Toronto, ON",
    logo: "/images/companies/canada.svg",
    summary: "Internal AI tools and production machine learning pipelines.",
    start: "2025-01",
    end: "2025-04",
  },
];

const monthYear = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const formatMonth = (value: string) =>
  monthYear.format(new Date(`${value}-01T00:00:00Z`));

export default function Home() {
  return (
    <>
      <IntroSplash />
      <main className={styles.page} aria-label="Travis Pan portfolio">
        <header className={styles.profile}>
          <div className={styles.banner}>
            <WaterlooSigil className={styles.sigil} />
            <div className={styles.identity}>
              <h1 className={styles.name}>Travis Pan</h1>
              <p className={styles.school}>University of Waterloo</p>
            </div>
            <div className={styles.academic}>
              <Icon name="graduation" />
              <div>
                <p className={styles.degree}>Computer Science and Finance</p>
                <p className={styles.graduation}>Expected <time dateTime="2028-04">Apr 2028</time></p>
              </div>
            </div>
          </div>
          <nav className={styles.links} aria-label="Résumé and contact">
            <a className={styles.link} href={assetPath("/Travis-Pan-Resume.pdf")} download aria-label="Download résumé" title="Download résumé" data-label="Résumé">
              <Icon name="resume" />
            </a>
            <a className={styles.link} href="https://github.com/travispan75" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" data-label="GitHub">
              <Icon name="github" />
            </a>
            <a className={styles.link} href="https://www.linkedin.com/in/travispan75/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" data-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
            <a className={styles.link} href="mailto:travispan75@gmail.com" aria-label="Email Travis" title="Email Travis" data-label="Email">
              <Icon name="mail" />
            </a>
          </nav>
        </header>

        <section className={styles.deck} aria-labelledby="experience-heading">
          <h2 className={styles.deckHeading} id="experience-heading">Experience</h2>
          <div className={styles.entries}>
            {experience.map((job) => (
              <article className={styles.entry} key={job.company}>
                <div className={styles.employer}>
                  <img className={styles.companyLogo} src={assetPath(job.logo)} width="30" height="30" alt="" />
                  <div className={styles.employerDetails}>
                    <h3 className={styles.company}>{job.company}</h3>
                    <p className={styles.location}>{job.location}</p>
                  </div>
                </div>
                <div className={styles.work}>
                  <p className={styles.jobRole}>Software Engineering Intern</p>
                  <p className={styles.summary}>{job.summary}</p>
                </div>
                <div className={styles.dates}>
                  <span>
                    <time dateTime={job.start}>{formatMonth(job.start)}</time>
                    {" – "}
                    <time dateTime={job.end}>{formatMonth(job.end)}</time>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
