import { profile } from "../data/portfolio.js";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>© {year} {profile.name}. All rights reserved.</p>
    </footer>
  );
}
