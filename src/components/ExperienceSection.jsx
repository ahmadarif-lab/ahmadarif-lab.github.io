import { experience, profile } from "../data/portfolio.js";
import { useTenure } from "../hooks/useTenure.js";

export function ExperienceSection() {
  const tenure = useTenure(profile.tenureStart);

  return (
    <section>
      <h2>Experience</h2>
      {experience.map((item) => (
        <div key={item.title} className="experience-item">
          <strong>
            {item.period}
            {item.current && <> · {tenure}</>}
          </strong>
          <br />
          {item.title} – {item.description}
        </div>
      ))}
    </section>
  );
}
