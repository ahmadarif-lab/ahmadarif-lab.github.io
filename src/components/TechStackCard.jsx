import { techStack } from "../data/portfolio.js";

export function TechStackCard() {
  return (
    <section>
      <h2>Tech Stack</h2>
      <div className="tech-stack">
        {techStack.map((item) => (
          <div key={item} className="stack-item">{item}</div>
        ))}
      </div>
    </section>
  );
}
