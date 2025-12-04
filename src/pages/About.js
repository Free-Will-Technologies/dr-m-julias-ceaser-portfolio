import Section from '../components/Section';
import { profile } from '../data/profile';

export default function About() {
  return (
    <main>
      <Section title="About">
        <p>{profile.objective}</p>
      </Section>
      <Section title="Education">
        <ul className="list">
          {profile.education.map((e) => (<li key={e}>{e}</li>))}
        </ul>
      </Section>
      <Section title="Personal Profile">
        <ul className="grid two">
      <li>
        <strong>Email: </strong>
           {profile.email.map((mail, i) => (
           <span key={i}>
           <a className="email-link" href={`mailto:${mail}`}>{mail}</a>
            {i !== profile.email.length - 1 && " / "}
             </span>
            ))}
         </li>
          <li><strong>Phone</strong><span>{profile.phones.join(' / ')}</span></li>
          <li><strong>Institution</strong><span>{profile.institution}</span></li>
          <li><strong>Languages</strong><span>{profile.personal.languages.join(', ')}</span></li>
        </ul>
      </Section>
      <Section title="Expert Memberships">
        <p className="section-intro">
          Dr. M. Julias Ceasar has extensive experience serving as an expert member and subject expert 
          for various Board of Studies across multiple autonomous colleges in Tamil Nadu, contributing 
          significantly to academic governance and curriculum development.
        </p>
        <div className="memberships-preview">
          {profile.expertMemberships.slice(0, 5).map((membership, index) => (
            <div key={index} className="membership-preview-item">
              <span className="membership-preview-text">{membership}</span>
            </div>
          ))}
          <div className="membership-preview-more">
            <a href="/expert-memberships" className="btn">View All Memberships</a>
          </div>
        </div>
      </Section>
    </main>
  );
}


