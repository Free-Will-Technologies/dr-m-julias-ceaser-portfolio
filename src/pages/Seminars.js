import Section from '../components/Section';
import { profile } from '../data/profile';

export default function Seminars() {
  return (
    <main>
      <Section title="Sponsored Seminars and Conferences Organized">
        <ul className="list">
          {profile.seminarsOrganized.map((s) => (<li key={s}>{s}</li>))}
        </ul>
      </Section>

<Section title="Specialized Lectures">
  <div className="container">

    <div className="lectures">
      {profile.lectures.map((lec, index) => {
        const embedUrl = lec.url
          .replace("watch?v=", "embed/")
          .replace("youtu.be/", "youtube.com/embed/");

        return (
          <div className="lecture-item" key={index}>
            <div className="lecture-video">
              <iframe
                src={embedUrl}
                title={lec.title}
                allowFullScreen
              ></iframe>
            </div>

            <p className="lecture title">{lec.title}</p>
          </div>
        );
      })}
    </div>
  </div>
</Section>




    </main>
  );
}


