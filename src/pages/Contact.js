import Section from '../components/Section';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <main>
      <Section title="Contact">
        <ul className="list">
<li>
  <strong>Email: </strong>
  {profile.email.map((mail, i) => (
    <span key={i}>
      <a className="email-link" href={`mailto:${mail}`}>{mail}</a>
      {i !== profile.email.length - 1 && " / "}
    </span>
  ))}
</li>


          <li><strong>Mobile:</strong> {profile.phones.join(' / ')}</li>
          <li><strong>Institution:</strong> {profile.institution}</li>
        </ul>
      </Section>
    </main>
  );
}


