import Section from '../components/Section';
import { profile } from '../data/profile';

export default function ExpertMemberships() {
  return (
    <main>
      <Section title="Expert Memberships & Board Positions">
        <div className="expert-memberships">
          <p className="section-intro">
            Dr. M. Julias Ceasar has served as an expert member and subject expert for various 
            Boards of Studies across multiple autonomous colleges in Tamil Nadu, contributing 
            significantly to academic governance and curriculum development.
          </p>
          
          <div className="memberships-timeline">
            {profile.expertMemberships.map((membership, index) => (
              <div key={index} className="membership-item">
                <div className="membership-content">
                  <h3 className="membership-title">{membership}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
