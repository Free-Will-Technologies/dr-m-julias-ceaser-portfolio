import Section from '../components/Section';
import { profile } from '../data/profile';

export default function Experience() {
  return (
    <main>
      <Section title="Experience and Positions (Past and Present)">
        <ul className="timeline">
          {profile.experience.roles.map((r) => (
            <li key={r.role + r.period}>
              <h3>{r.role}</h3>
              <p>{r.dept}, {r.org}</p>
              <span className="time">{r.period}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Other important assignments">
        <ul className="timeline">
          {profile.experience.otherAssignments.map((exp,index) => (
            <li key={index}>
              <h3>{exp.role}</h3>
               <p> {exp.org}</p>
              <span className="time">{exp.period}</span>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}


