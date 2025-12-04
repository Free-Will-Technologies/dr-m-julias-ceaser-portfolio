import Hero from '../components/Hero';
import Section from '../components/Section';
import { profile } from '../data/profile';

export default function Home() {
  return (
    <main>
      <Hero />

      <Section title="At a Glance">
        <ul className="stats">
          <li><strong>{profile.experience.total}</strong><span>Experience</span></li>
          <li><strong>{profile.publicationsSummary.journalPapers}</strong><span>Journal Papers</span></li>
          <li><strong>{profile.publicationsSummary.phdProduced}</strong><span>Ph.D. Produced</span></li>
          <li><strong>{profile.publicationsSummary.booksAuthored}</strong><span>Books</span></li>
        </ul>
      </Section>

      <Section title="Specialization">
        <div className="chips">
          {profile.specialization.map((s) => (
            <span className="chip" key={s}>{s}</span>
          ))}
        </div>
      </Section>
    </main>
  );
}


