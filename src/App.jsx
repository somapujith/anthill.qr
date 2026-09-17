import logo from "./assets/logo.jpg";
import { links } from "./links.js";

const ICONS = {
  contact: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 6.5C4 5.67 4.67 5 5.5 5h13c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m4.5 6 7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  website: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4 12h16M12 3.75c2.1 2.3 3.25 5.15 3.25 8.25S14.1 17.95 12 20.25C9.9 17.95 8.75 15.1 8.75 12S9.9 6.05 12 3.75Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.85" cy="7.15" r="1.15" fill="currentColor" />
    </svg>
  ),
};

const CHEVRON = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m9 6 6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ITEMS = [
  { key: "contact", label: "Contact", href: links.contact },
  { key: "website", label: "Website", href: links.website },
  { key: "instagram", label: "Instagram", href: links.instagram },
];

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <img src={logo} alt="Anthill Ventures" className="logo" />
        <p className="tagline">Let's connect</p>
        <div className="links">
          {ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target={item.key === "contact" ? undefined : "_blank"}
              rel={item.key === "contact" ? undefined : "noopener noreferrer"}
              className="link-button"
            >
              <span className="icon">{ICONS[item.key]}</span>
              <span className="label">{item.label}</span>
              <span className="chevron">{CHEVRON}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
