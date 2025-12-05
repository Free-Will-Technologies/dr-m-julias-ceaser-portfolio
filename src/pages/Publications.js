import Section from '../components/Section';
import { profile } from '../data/profile';

export default function Publications() {
  const p = profile.publicationsSummary;
  
  return (
    <main>
      <Section title="Publications & Contributions">
        <ul className="stats">
          <li><strong>{p.journalPapers}</strong><span>Journal Papers</span></li>
          <li><strong>{p.papersPresented}</strong><span>Papers Presented</span></li>
          <li><strong>{p.eventsAttended}</strong><span>Events Attended</span></li>
          <li><strong>{p.phdProduced}</strong><span>Ph.D. Produced</span></li>
          <li><strong>{p.internationalVisits}</strong><span>International Visits</span></li>
        </ul>
      </Section>

      <Section title="Latest Publications">
        <div className="publications-list">
          {profile.recentPublications.map((pub, index) => (
            <div key={index} className="publication-item">
              <div className="publication-header">
                <h3 className="publication-title">{pub.title}</h3>
                <span className="publication-journal">{pub.journal}</span>
              </div>
              <div className="publication-details">
                <div className="publication-meta">
                  <span className="publication-date">{pub.month}</span>
                  <span className="publication-volume">{pub.volume}</span>
                  {pub.impactFactor !== "N/A" && (
                    <span className="publication-impact">Impact Factor: {pub.impactFactor}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

  <Section title="Featured Publications">
        <div className="featured-publications">
          {profile.featuredPublications.map((pub, index) => (
            <div key={index} className="featured-publication">
              <h3 className="featured-title">{pub.title}</h3>
              <div className="featured-meta">
                <p><strong>Co-Authors:</strong> {pub.coAuthors}</p>
                <p><strong>Journal:</strong> {pub.journal}</p>
                <p><strong>Year:</strong> {pub.year}</p>
                {pub.doi && <p><strong>DOI:</strong> {pub.doi}</p>}
                {pub.issn && <p><strong>ISSN:</strong> {pub.issn}</p>}
              </div>
              <div className="featured-abstract">
                <h4>Abstract</h4>
                <p>{pub.abstract}</p>
              </div>
              <div className="featured-links">
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="btn primary">
                  Read Full Paper
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}


