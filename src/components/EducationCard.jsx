import { education } from "../data/portfolio.js";

export function EducationCard() {
  return (
    <section>
      <h2>Education</h2>
      {education.map((item) => (
        <div key={item.title} className="experience-item">
          <strong>{item.period}</strong>
          <br />
          {item.title} – {item.place}
        </div>
      ))}
    </section>
  );
}
