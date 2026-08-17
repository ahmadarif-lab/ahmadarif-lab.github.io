import { publications } from "../data/portfolio.js";

export function PublicationsCard() {
  return (
    <section>
      <h2>Publications</h2>
      {publications.map((item) => (
        <div key={item.title} className="experience-item">
          <a href={item.href} target="_blank" rel="noopener noreferrer"><strong>{item.title}</strong></a>
          <br />
          {item.authors} – {item.venue}
        </div>
      ))}
    </section>
  );
}
