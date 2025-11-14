import Section from '../components/Section';
import { profile } from '../data/profile';

export default function Publications() {
  const p = profile.publicationsSummary;
  
  return (
    <main>
      <Section title="Book Contributions">
        <ul className="stats">
          <li><strong>{p.booksAuthored}</strong><span>Books Authored</span></li>
          <li><strong>{p.booksEdited}</strong><span>Books Edited</span></li>
          <li><strong>{p.contributionsToBooks}</strong><span>Contributions to Books</span></li>
        </ul>
      </Section>
      
       <section className="section book-publications">
  <div className="container">
    <h2 className="section-title">Book Publications</h2>

    <div className="publications-list">
      {profile.bookPublications.map((book) => (
        <div key={book.id} className="publication-item">
          {/* Left: Details */}
          <div className="book-details">
            <h3>{book.title}</h3>
            <p>
              <strong>
                {book.authors.includes(",") ? "Authors:" : "Author:"}
              </strong>{" "}
              {book.authors}
            </p>
            <p><strong>Publication:</strong> {book.publication}</p>
            <p className="book-preface">{book.preface}</p>
          </div>

          {/* Right: Image */}
          <div className="book-cover responsive">
            <img
              src={book.cover}
              alt={`${book.title} cover`}
              onLoad={(e) => {
                const img = e.target;
                img.classList.add(
                  img.naturalWidth > img.naturalHeight
                    ? "landscape"
                    : "portrait"
                );
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      

      </main>
  );
}
