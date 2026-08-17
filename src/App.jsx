import { ProfileHero } from "./components/ProfileHero.jsx";
import { AboutCard } from "./components/AboutCard.jsx";
import { TechStackCard } from "./components/TechStackCard.jsx";
import { ProjectsSection } from "./components/ProjectsSection.jsx";
import { ExperienceSection } from "./components/ExperienceSection.jsx";
import { EducationCard } from "./components/EducationCard.jsx";
import { PublicationsCard } from "./components/PublicationsCard.jsx";
import { Footer } from "./components/Footer.jsx";
import { GoToTopButton } from "./components/GoToTopButton.jsx";

export default function App() {
  return (
    <>
      <ProfileHero />
      <AboutCard />
      <TechStackCard />
      <ProjectsSection />
      <ExperienceSection />
      <EducationCard />
      <PublicationsCard />
      <Footer />
      <GoToTopButton />
    </>
  );
}
