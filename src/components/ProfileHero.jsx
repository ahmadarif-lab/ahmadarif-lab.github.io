import { useState } from "react";
import { profile } from "../data/portfolio.js";
import { useTenure } from "../hooks/useTenure.js";
import { Icon } from "./icons.jsx";

const SPARKLE = "M50,2 L68,32 L98,50 L68,68 L50,98 L32,68 L2,50 L32,32 Z";

export function ProfileHero() {
  const [loaded, setLoaded] = useState(false);
  const career = useTenure(profile.careerStart);
  const careerYears = career.split(" ")[0];

  return (
    <header className="site-header">
      <svg className="hero-burst hero-burst-1" viewBox="0 0 100 100" aria-hidden="true">
        <path d={SPARKLE} />
      </svg>
      <svg className="hero-burst hero-burst-2" viewBox="0 0 100 100" aria-hidden="true">
        <path d={SPARKLE} />
      </svg>

      <div className="hero-inner">
        <div className="photo-frame-wrap">
          <div className="photo-frame">
            <div className="photo-frame-bar">
              <span className="photo-frame-dot" />
              <span className="photo-frame-dot" />
              <span className="photo-frame-dot" />
            </div>
            <div className="photo-frame-photo">
              {!loaded && <div className="photo-loader" />}
              <picture>
                <source srcSet={profile.photoWebp} type="image/webp" />
                <img
                  src={profile.photo}
                  alt={profile.name}
                  width="170"
                  height="170"
                  fetchPriority="high"
                  decoding="async"
                  className={loaded ? "loaded" : ""}
                  onLoad={() => setLoaded(true)}
                />
              </picture>
            </div>
          </div>
          <span className="speech-bubble">Hi! 👋</span>
          <span className="tenure-sticker">
            <strong>{careerYears}+</strong>
            <span>yrs in tech</span>
          </span>
        </div>

        <h1>{profile.name}</h1>
        <p>{profile.title}</p>
        <p>{profile.current}</p>

        <div className="social-links">
          {profile.social.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              <Icon name={link.icon} className="social-icon" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
