import logo from "./assets/logo.jpg";
import { links } from "./links.js";

const ICONS = {
  contact: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  mail: (
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

export default function LinksPage({ name, phone, email }) {
  const items = [];

  if (phone) {
    items.push({ key: "contact", label: "Contact", href: `tel:${phone}`, external: false });
  } else {
    items.push({ key: "contact", label: "Contact", href: links.contact, external: false });
  }

  if (email) {
    items.push({ key: "mail", label: "Mail", href: `mailto:${email}`, external: false });
  }

  items.push({ key: "website", label: "Website", href: links.website, external: true });
  items.push({ key: "instagram", label: "Instagram", href: links.instagram, external: true });

  return (
    <div className="page">
      <div className="card">
        <img src={logo} alt="Anthill Ventures" className="logo" />
        <p className="tagline">{name ?? "Let's connect"}</p>
        <div className="links">
          {items.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
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
