import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-text-content">
            <div className="hero-name-section">
              <h1 className="hero-title">
                <span className="accent">{profile.name}</span>
              </h1>
              <div className="hero-image-mobile">
                <div className="profile-photo-mobile">
                  <img 
                    src="/profile-photo.jpg" 
                    alt="Dr. M. Julias Ceasar" 
                    className="profile-img-mobile"
                  />
                </div>
              </div>
            </div>
            <p style={{ whiteSpace: "pre-line" }} className="hero-subtitle">{profile.titles.join(' \n')}</p>
            <p className="hero-text">{profile.objective}</p>
            <div className="hero-cta">
              <a className="btn primary" href="mailto:julius.sxc@gmail.com">Email</a>
              <a className="btn" href="/publications">Publications</a>
              <a className="btn primary" href="/Dr. M. Julias Ceaser's CV.pdf" download>Download CV</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-photo">
              <img 
                src="/profile-photo.jpg" 
                alt="Dr. M. Julias Ceasar" 
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


